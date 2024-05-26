#include <bits/stdc++.h>

using namespace std;

string solution(string b)
{
    string a;
    if (b.size() == 2)
        return b;
    else
        for (int i = 0; i < b.size(); i = i + 2)
        {
            a = a + b[i];
        }

    return a + b[b.size() - 1];
}

int main()
{
    int t;
    string b;
    cin >> t;
    vector<string> resp(t);
    for (int i = 0; i < t; i++)
    {
        cin >> b;
        resp[i] = solution(b);
    }

    for (int i = 0; i < t; i++)
    {
        cout << resp[i] << endl;
    }
}