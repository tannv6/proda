import React from "react";

/**
 * * 파일첨부시 설정한 확장자가 포함되는지 확인
 * @param {{el:array, extArr:[string]}} el 파일 input.files[0]
 * @param {*} extArr 확인할 확장자 배열
 * @returns {{result:boolean, msg:string}} result: 결과 값, msg: 결과메시지
 */
const FileExtChk = ({ el, extArr }) => {
    let chk = false,
        msg = '',
        extTxt = '';
    const ext = el.name.toLocaleLowerCase().substring(el.name.lastIndexOf('.') + 1);
    extArr.forEach(obj => {
        if (obj == ext) {
            chk = true;
        }
        if (extTxt) {
            extTxt += ", ";
        }
        extTxt += obj;
    })

    if (!chk) {
        msg = `${extTxt}의 확장자가 아닙니다.`;
        chk = false;
    } else {
        msg = '';
        chk = true;
    }
    return {
        result: chk,
        msg: msg
    }
}

/**
 * * 파일첨부시 설정한 용량을 초과하는지 확인
 * @param {{el:array, size:number}} el 파일 input.files[0]
 * @param {*} size 최대용량 설정 'size' MB
 * @returns {{result:boolean, msg:string}} result: 결과 값, msg: 결과메시지
 */
const FileSizeChk = ({ el, size }) => {
    //default MB
    const maxSize = size * 1024 * 1024 // 최대 업로드 크기
    const fileSize = el.size; // 파일 크기

    let msg = '',
        chk = true;

    if (fileSize > maxSize) {
        msg = `첨부파일 최대용량은 ${size}MB 입니다.`;
        chk = false;
    }

    return {
        result: chk,
        msg: msg
    }
}

export { FileExtChk, FileSizeChk }