#include <bits/stdc++.h>
#include <algorithm>
#include <iostream>
#include <stdio.h>

using namespace std;

int main()
{
    int n, m;
    cin >> n;
    map<string, string> traducoes;
    for (int i = 0; i < n; i++)
    {
        string idioma, mensagem;
        cin >> idioma;
        cin.ignore();
        getline(cin, mensagem);
        traducoes[idioma] = mensagem;
    }
    cin >> m;
    vector<pair<string, string>> criancas(m);
    for (int i = 0; i < m; i++)
    {
        string idioma, nome;
        cin.ignore();
        getline(cin, nome);
        cin >> idioma;
        criancas[i] = make_pair(idioma, nome);
    }
    for (int i = 0; i < m; i++)
    {
        auto it = traducoes.find(criancas[i].first);

        cout << criancas[i].second << endl
             << (*it).second << endl
             << endl;
    }
}