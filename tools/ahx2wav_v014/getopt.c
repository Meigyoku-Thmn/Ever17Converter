/*LINTLIBRARY*/
/***********************************************************************
    getopt.c  ����getopt.c��Public Domain�ł�
    1996.4 Hiroshi Masuda �ύX
***********************************************************************/
#include <stdio.h>
#include <string.h>

int     opterr = 1;       /* getopt()�G���[���b�Z�[�W 1:�\�� 0:��\�� */
int     optind = 1;       /* getopt()�C���f�b�N�X */
int     optopt;           /* �擾�I�v�V�������� */
char    *optarg;          /* �擾�I�v�V�����p�����[�^������ */

static void errdisp(char *cmd, char *as)
{
    static char     crtail[ ] = {0, '\n', 0};

    if(opterr){
        fputs(cmd, stderr);     fputs(as, stderr);
        *crtail = optopt;   fputs(crtail, stderr);
    }
}

int getopt(int ac, char **av, char *opts)
{
    static char     *curopt = NULL;
    register char   *cp;

    if(curopt == NULL || !*curopt){
        curopt = av[optind];
        if(optind >= ac || *curopt != '-' || !curopt[1])
            return(EOF);                 /* �I�v�V�����w��Ȃ� */
        if(!strcmp("-", ++curopt)){
            ++optind;
            return(EOF);                 /* -- �w�� */
        }
    }
    optopt = *curopt++;                 /* option�����i�[ */
    cp = strchr(opts, optopt);          /* option�������� */
    if(optopt == ':' || cp == NULL){    /* option�����s�� or �������s */
        errdisp(*av, ": unknown option, -");
        if(!*curopt)
            ++optind;
        return('?');
    }
    if(*++cp == ':'){                   /* option�p�����[�^���� */
        ++optind;
        if(*curopt){
            optarg = curopt;
            curopt = NULL;
        }else{
            if(optind >= ac){
                errdisp(*av, ": argument missing for -");
                return('?');
            }else{
                optarg = av[optind++];
            }
             /* now *curopt == '\0' */
        }
    }else{
        optarg = NULL;
        if(!*curopt) ++optind;
    }
    return(optopt);
}
