export function *objectLoop(iter) {
    for(const val in iter) {
        yield val
    }
}
