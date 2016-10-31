#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int check_unique(char *input) {
	int i,j;
	for (i = 0; i < strlen(input); i++) {
		for (j = 0; j < strlen(input); j++) {
			if (i != j) {
				if (input[i] == input[j]) {
					return 0;
				}
			}
		}
	}
	return 1;
}

int main(int argc, char const *argv[]) {
	char *string = "axyvbcdef";
	if (check_unique(string)) {
		printf("unique!\n");
	}
	else {
		printf("duplicated!\n");
	}
	return 0;
}