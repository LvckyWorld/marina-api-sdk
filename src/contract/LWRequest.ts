/*
 * ©2016-2024 LvckyWorld - by LvckyAPI all Rights reserved
 * Licensed to Iven Schlenther, Lukas Oetken and Michal Oblong
 * Project: lvckyworld-api
 */


export interface ErrorResponseBody {
    success: false,
    error: string,
    errorCode: string,
}

export interface SuccessResponseBody {
    success: true,
    data: any
}

