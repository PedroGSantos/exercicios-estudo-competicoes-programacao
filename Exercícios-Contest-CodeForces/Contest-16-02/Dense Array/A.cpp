#include <bits/stdc++.h>

using namespace std;

int maior(int a, int b)
{
    return a > b ? a : b;
}

int menor(int a, int b)
{
    return a < b ? a : b;
}

int solution(vector<int> vetor)
{
    int aux;
    int contadorAdicionais = 0;
    for (int i = 0; i < vetor.size() - 1; i++)
    {
        if ((float)maior(vetor[i], vetor[i + 1]) / menor(vetor[i], vetor[i + 1]) > 2)
        {
            aux = menor(vetor[i], vetor[i + 1]);
            do
            {
                contadorAdicionais++;
                aux = aux * 2;
            } while (aux < (float)maior(vetor[i], vetor[i + 1]) / 2);
        }
    }
    return contadorAdicionais;
}

int main()
{
    int t, n;
    cin >> t;
    vector<int> resp(t);
    for (int i = 0; i < t; i++)
    {
        cin >> n;
        vector<int> vetor(n);
        for (int j = 0; j < n; j++)
        {
            cin >> vetor[j];
        }
        resp[i] = solution(vetor);
    }

    for (int i = 0; i < t; i++)
    {
        cout << resp[i] << endl;
    }
}