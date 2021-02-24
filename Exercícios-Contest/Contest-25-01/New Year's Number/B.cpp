#include <bits/stdc++.h>

using namespace std;

string solution(int n)
{
    int x, y;
    x = (int)n / 2020;
    y = (int)n / 2021;

    for (int i = 0; i <= x; i++)
    {
        for (int j = 0; j <= y; j++)
        {
            if (i * 2020 + j * 2021 == n)
            {
                return "YES";
            }
        }
    }

    return "NO";
}

int main()
{
    int t, n;
    cin >> t;
    vector<string> resp(t);

    for (int i = 0; i < t; i++)
    {
        cin >> n;
        resp[i] = solution(n);
    }

    for (int i = 0; i < t; i++)
    {
        cout << resp[i] << endl;
    }
}