#include <bits/stdc++.h>

using namespace std;

int solution(vector<int> pont, int minComp)
{

    int cont;
    sort(pont.begin(), pont.end());
    reverse(pont.begin(), pont.end());
    int j = pont[minComp - 1];
    reverse(pont.begin(), pont.end());

    for (int i = 0; i < 1000; i++)
    {
        if (pont[i] == j)
        {
            cont = i;
            break;
        }
    }

    return pont.size() - cont;
}

int main()
{
    int N, K;
    cin >> N >> K;

    vector<int> pont(N);

    for (int i = 0; i < pont.size(); i++)
    {
        cin >> pont[i];
    }

    cout << solution(pont, K) << endl;
}