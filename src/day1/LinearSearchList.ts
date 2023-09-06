export default function linear_search(haystack: number[], needle: number): boolean {
<<<<<<< HEAD

    for (let i=0; i <haystack.length; ++i) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
=======
    for (let i=0; i<haystack.length; i++) {
        if (haystack[i] === needle) return true;
    }
    return  false

>>>>>>> ebb855c8d149d1970e0aae70d7d7b741bb6b46d8
}