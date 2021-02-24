#include <bits/stdc++.h>

using namespace std;

int solution(vector<int> vetor)
{
    int contadorParesErrados = 0, contadorImparesErrados = 0;

    for (int i = 0; i < vetor.size(); i++)
    {
        if (i % 2 != vetor[i] % 2)
        {
            if (vetor[i] % 2 == 0)
            {
                contadorParesErrados++;
            }
            else
            {
                contadorImparesErrados++;
            }
        }
    }

    return contadorParesErrados == contadorImparesErrados ? contadorParesErrados : -1;
}

int main()
{
    int t;
    int n;

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