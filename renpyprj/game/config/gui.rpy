init offset = -10

define gui.show_name = False
## An accent color used throughout the interface to label and highlight text.
define gui.accent_color = '#FFF'

## The color used for a text button when it is neither selected nor hovered.
define gui.idle_color = (99, 107, 121, 255)

## The small color is used for small text, which needs to be brighter/darker to
## achieve the same effect.
define gui.idle_small_color = '#888888'

## The color that is used for buttons and bars that are hovered.
define gui.hover_color = (255, 255, 255, 180)

## The color used for a text button when it is selected but not focused. A
## button is selected if it is the current screen or preference value.
define gui.selected_color = '#FFF'

## The color used for a text button when it cannot be selected.
define gui.insensitive_color = '#aaaaaa7f'

## Colors used for the portions of bars that are not filled in. These are not
## used directly, but are used when re-generating bar image files.
define gui.muted_color = '#6684a3'
define gui.hover_muted_color = '#99adc1'

## The colors used for dialogue and menu choice text.
define gui.text_color = '#404040'
define gui.interface_text_color = '#404040'

## The color of button text in various states.
define gui.button_text_idle_color = gui.idle_color
define gui.button_text_hover_color = gui.hover_color
define gui.button_text_selected_color = gui.selected_color
define gui.button_text_insensitive_color = gui.insensitive_color

## These variables override settings for different kinds of buttons. Please see
## the gui documentation for the kinds of buttons available, and what each is
## used for.
##
## These customizations are used by the default interface:

define gui.radio_button_borders = Borders(12, 3, 3, 3)

define gui.check_button_borders = Borders(12, 3, 3, 3)

define gui.confirm_button_text_xalign = 0.5

define gui.page_button_borders = Borders(7, 3, 7, 3)

define gui.quick_button_borders = Borders(7, 3, 7, 0)
define gui.quick_button_text_size = 9
define gui.quick_button_text_idle_color = gui.idle_small_color
define gui.quick_button_text_selected_color = gui.accent_color

## You can also add your own customizations, by adding properly-named variables.
## For example, you can uncomment the following line to set the width of a
## navigation button.

# define gui.navigation_button_width = 250

## Choice Buttons ##############################################################
##
## Choice buttons are used in the in-game menus.

define gui.choice_button_width = 494
define gui.choice_button_height = None
define gui.choice_button_tile = False
define gui.choice_button_borders = Borders(63, 4, 63, 4)
define gui.choice_button_text_font = gui.text_font
define gui.choice_button_text_size = gui.text_size
define gui.choice_button_text_xalign = 0.5
define gui.choice_button_text_idle_color = "#cccccc"
define gui.choice_button_text_hover_color = "#ffffff"
define gui.choice_button_text_insensitive_color = "#444444"

## The save slot button.
define gui.slot_button_width = 173
define gui.slot_button_height = 129
define gui.slot_button_borders = Borders(7, 7, 7, 7)
define gui.slot_button_text_size = 9
define gui.slot_button_text_xalign = 0.5
define gui.slot_button_text_idle_color = gui.idle_small_color
define gui.slot_button_text_selected_idle_color = gui.selected_color
define gui.slot_button_text_selected_hover_color = gui.hover_color