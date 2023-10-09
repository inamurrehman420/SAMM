export interface responseData<T> {
    data: T;
    exception: string;
    message: string;
    success: Boolean;
}