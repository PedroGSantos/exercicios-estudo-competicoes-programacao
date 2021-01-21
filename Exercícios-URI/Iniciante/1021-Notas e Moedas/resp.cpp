#include <bits/stdc++.h>

using namespace std;

int main()
{
    double money, cents;
    int notas100, notas50, notas20, notas10, notas5, notas2, moedas1real, moedas50, moedas25, moedas10, moedas5, moedas1;

    cin >> money;

    notas100 = money / 100;
    notas50 = (money - 100 * notas100) / 50;
    notas20 = (money - 100 * notas100 - 50 * notas50) / 20;
    notas10 = (money - 100 * notas100 - 50 * notas50 - 20 * notas20) / 10;
    notas5 = (money - 100 * notas100 - 50 * notas50 - 20 * notas20 - 10 * notas10) / 5;
    notas2 = (money - 100 * notas100 - 50 * notas50 - 20 * notas20 - 10 * notas10 - 5 * notas5) / 2;
    moedas1real = (money - 100 * notas100 - 50 * notas50 - 20 * notas20 - 10 * notas10 - 5 * notas5 - 2 * notas2) / 1;

    //change decimal values(cents) to integer values
    cents = money * 100;
    cents = (int)cents % 100;

    moedas50 = cents / 50;
    moedas25 = (cents - 50 * moedas50) / 25;
    moedas10 = (cents - 50 * moedas50 - 25 * moedas25) / 10;
    moedas5 = (cents - 50 * moedas50 - 25 * moedas25 - 10 * moedas10) / 5;
    moedas1 = (cents - 50 * moedas50 - 25 * moedas25 - 10 * moedas10 - 5 * moedas5) / 1;

    cout << "NOTAS:" << endl;
    cout << notas100 << " nota(s) de R$ 100.00" << endl;
    cout << notas50 << " nota(s) de R$ 50.00" << endl;
    cout << notas20 << " nota(s) de R$ 20.00" << endl;
    cout << notas10 << " nota(s) de R$ 10.00" << endl;
    cout << notas5 << " nota(s) de R$ 5.00" << endl;
    cout << notas2 << " nota(s) de R$ 2.00" << endl;
    cout << "MOEDAS:" << endl;
    cout << moedas1real << " moeda(s) de R$ 1.00" << endl;
    cout << moedas50 << " moeda(s) de R$ 0.50" << endl;
    cout << moedas25 << " moeda(s) de R$ 0.25" << endl;
    cout << moedas10 << " moeda(s) de R$ 0.10" << endl;
    cout << moedas5 << " moeda(s) de R$ 0.05" << endl;
    cout << moedas1 << " moeda(s) de R$ 0.01" << endl;
}