#include <cstdlib>
#include <iostream>
#include <map>
#include <string>
#include <vector>

using namespace std;

class ArrayList {
public:
	string str;
	void merge(string);
	ArrayList() {}
}

ArrayList::merge(string inputString) {
	if (str.length() + inputString.length() > 10) {
		string newStr;
		newStr.append(str);
		newStr.append(inputString);
		str = newStr;
	}
	else {
		
	}
}

int main(int argc, char const *argv[]) {
	/* code */
	return 0;
}