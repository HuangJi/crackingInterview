#include <cstdlib>
#include <iostream>
#include <map>
#include <string>
#include <vector>

using namespace std;
typedef map<int, string> HashTable;

class HashMap {
public:
	HashTable hashTable;
	HashTable buildMap(vector<string>);
	void printMap();
	HashMap() {}
};

HashTable HashMap::buildMap(vector<string> studentList) {
	for (int i = 0; i < studentList.size(); i++) {
		this->hashTable.insert(pair<int, string>(i, studentList[i]));
	}
	return hashTable;
}

void HashMap::printMap() {
	for (int i = 0; i < hashTable.size(); i++) {
		cout << hashTable[i] << " ";
	}
	cout << endl;
}

int main(int argc, char const *argv[]) {
	vector<string> v;
	HashMap hashMap;
	for (int i = 0; i < 12; i++) {
		if (i % 2 == 0) {
			v.push_back("wilson");	
		}
		else {
			v.push_back("huangji");
		}
	}
	hashMap.hashTable = hashMap.buildMap(v);
	hashMap.printMap();
	cout << hashMap.hashTable[11] << endl;

	return 0;
}