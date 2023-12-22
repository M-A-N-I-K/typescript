function swap<T>(first : T, second : T) : T[]{
    const temp = first;
    first = second;
    second = temp;
    return [first,second];
}

const ans = swap(1,2);
const ans2 = swap("one","two");
console.log(ans);
console.log(ans2);