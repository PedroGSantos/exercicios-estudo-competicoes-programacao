#include <iostream>
#include <algorithm>
#include <bits/stdc++.h>

using namespace std;

int qtdIgual(vector<int> desordenado, vector<int> ordenado)
{
    int qtd = 0;

    for (int i = 0; i < desordenado.size(); i++)
    {
        if (desordenado[i] == ordenado[i])
        {
            qtd++;
        }
    }

    return qtd;
}

int main()
{
    int n, m;
    cin >> n;
    vector<int> resp(n);
    for (int i = 0; i < resp.size(); i++)
    {
        cin >> m;
        vector<int> desordenado(m);
        vector<int> ordenado(m);
        for (int j = 0; j < desordenado.size(); j++)
        {
            cin >> desordenado[j];
            ordenado[j] = desordenado[j];
        }
        sort(ordenado.begin(), ordenado.end());
        reverse(ordenado.begin(), ordenado.end());
        resp[i] = qtdIgual(desordenado, ordenado);
    }

    for (int i = 0; i < resp.size(); i++)
        cout << resp[i] << endl;
}