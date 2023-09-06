export default function bs_list(haystack: number[], needle: number): boolean {
<<<<<<< HEAD
    let lo = 0;
    let hi = haystack.length;
    do {
        const m = Math.floor(lo + (hi - lo) / 2);
        const val = haystack[m];
        if (val === needle) {
            return true;
        } else if (val < needle) {
   
            lo = m + 1;
        } else {
            hi = m;
        }
    } while (lo < hi);
    return false;
}
=======

}
>>>>>>> ebb855c8d149d1970e0aae70d7d7b741bb6b46d8
