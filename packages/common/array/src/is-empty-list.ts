// TODO remove function in next major
/**
 * @deprecated Use <code>hasNoItems</code> instead
 */
export function isEmptyList<T>(arr?: T[] | null): boolean {
    return !(arr || []).length;
}
