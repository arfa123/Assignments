#include <iostream.h>

using namespace std;

int main(){
	int selected_option, initial_salary, increment_amount, updated_salary, tax_amount, tax_deduction_percent, net_salary;
	tax_deduction_percent = 3;

	cout << "******************** SALARY CALCULATOR ********************\n";
	cout << "***********************************************************\n";
	cout << "********************* Enter 1 for SPS6 ********************\n";
	cout << "********************* Enter 2 for SPS7 ********************\n";
	cout << "********************* Enter 3 for SPS8 ********************\n";
	cout << "********************* Enter 4 for SPS9 ********************\n";
	cout << "Select a pay scale from the menu: ";
	cin >> selected_option;

	switch (selected_option){
		case 1:
			initial_salary = 40000;
			increment_amount = (initial_salary * 20) / 100;
			break;
		case 2:
			initial_salary = 60000;
			increment_amount = (initial_salary * 15) / 100;
			break;
		case 3:
			initial_salary = 80000;
			increment_amount = (initial_salary * 10) / 100;
			break;
		case 4:
			initial_salary = 100000;
			increment_amount = (initial_salary * 5) / 100;
			break;
		default:
			cout << "\nSelected choice is invalid";
	}
	
	if (initial_salary && increment_amount) {
		updated_salary = initial_salary + increment_amount;
		tax_amount = (updated_salary * tax_deduction_percent) / 100;
		net_salary = updated_salary - tax_amount;
		cout << "\nInitial Salary: " << initial_salary;
		cout << "\nIncremented Amount: " << increment_amount;
		cout << "\nIncreased Salary: " << updated_salary;
		cout << "\nTax Deduction: " << tax_amount;
		cout << "\nNet Salary: " << net_salary;
	}
	
	cout << "\nEnter any key to exit";
	cin >> selected_option;
}
