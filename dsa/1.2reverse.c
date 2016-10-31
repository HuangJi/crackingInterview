#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int reverse(char *input_string) {
	int i = 0;
	for (i = strlen(input_string) - 1; i >= 0; i--) {
		printf("%c", input_string[i]);
	}
	printf("\n");
	return 0;
}

char *reverse_(char *input) {
	int i = 0; int len = strlen(input); int j = 0;
	char *reverse_str = (char *)malloc(sizeof(char) * len);
	for (i = len - 1; i >= 0; i--) {
		reverse_str[j++] = input[i];
	}
	reverse_str[j] = '\0';
	return reverse_str;
}

int main(int argc, char const *argv[]) {
	char *reverse_str;
	char string[] = "abcedf";
	char string2[] = "xxyyzz";
	reverse_str = reverse_(string2);
	printf("%s\n", reverse_str);
	reverse(string);
	return 0;
}
