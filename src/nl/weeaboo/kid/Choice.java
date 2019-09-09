package nl.weeaboo.kid;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Choice {

	private List<Option> options;
	private String endLabel;
	
	public Choice(String endLabel) {
		this.options = new ArrayList<Option>();
		this.endLabel = endLabel;
	}
	
	//Functions
	public void add(String opt) {
		add(null, opt);
	}
	public void add(String varname, String opt) {
		options.add(new Option(varname, opt));
	}
	
	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();

		Option[] opts = options.toArray(new Option[0]);
		int combinations = 1 << opts.length;
		int remapping[] = new int[opts.length];
		
		boolean fullyUnconditional = true;
		for (int x = 0; x < opts.length; x++) {
			if (opts[x].hasCondition()) {
				fullyUnconditional = false;
				break;
			}
		}
		if (fullyUnconditional) {
			combinations = 1;
		}
		
		for (int n = 0; n < combinations; n++) {
			int includedCount = 0;
			Arrays.fill(remapping, -1);
			
			StringBuilder cb = new StringBuilder();			
			for (int x = 0; x < opts.length; x++) {
				//negate if bit(n) != 0
				int bit = (n >> x) & 1;
				boolean include = (bit == 0);
				
				if (opts[x].hasCondition()) {
					sb.append("if ");
					sb.append(opts[x].getCondition(include));
					sb.append("\n");
				}
				
				if (include || !opts[x].hasCondition()) {
					if (cb.length() > 0) cb.append('|');
					cb.append(opts[x].getText());
					
					remapping[includedCount++] = x;
				}
			}
			
			String choiceString = cb.toString().trim();
			if (choiceString.length() > 0) {
				sb.append("choice ");
				sb.append(choiceString);
				for (int x = 0; x < remapping.length; x++) {
					if (remapping[x] < 0) break;
						
					sb.append("\nif selected == " + (x + 1));
					sb.append("\n\tsetvar selected2 = " + remapping[x]);
					sb.append("\nfi");
				}
			} else {
				sb.append("text ERROR: All choice options are deactivated\n");
				sb.append("setvar selected = 0\n");
			}
			sb.append("\ngoto " + endLabel);
			
			for (int x = 0; x < opts.length; x++) {
				if (opts[x].hasCondition()) {
					sb.append("\nfi");
				}
			}
			sb.append("\n\n");
		}
		
		sb.append("label " + endLabel);
		sb.append("\nsetvar " + KIDUtil.getVarname("b3") + " = selected2");
		
		return sb.toString();
	}
	
	//Getters
	
	//Setters
	
	//Inner classes
	private static class Option {
		
		private final String varname;
		private final String text;
		
		public Option(String varname, String text) {
			this.varname = varname;
			this.text = text;
		}
		
		public boolean hasCondition() {
			return varname != null;
		}
		
		public String getCondition(boolean include) {
			return varname + " " + (include ? "!=" : "==") + " 0";
		}
		
		public String getText() {
			return text;
		}
		
	}
	
}
