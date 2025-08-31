//This is a naive solution that got TLE

function longestPalindrome(s: string): string {    
    let longest = "";
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let substring = s.substring(i, j + 1);
            
            if (isPalindrome(substring) && substring.length > longest.length) {
                longest = substring;
            }
        }
    }
    
    return longest;
};

function isPalindrome(str: string): boolean {
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}