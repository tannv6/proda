import React, { useMemo, useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import 'react-quill/dist/quill.snow.css'
import ImageResize from "quill-image-resize";
import axios from "axios"

Quill.register('modules/ImageResize', ImageResize);

/**
 * 
 * @param {{editorData:any, setEditorData:function, videoUse:boolean, imageExt:[string], sizeControlNumber:number, style:object}} editorData 에디터 내용 state
 * @param {*} setEditorData 에디터의 setState
 * @param {*} videoUse 에디터의 video삽입tool [iframe으로 출력되기에 홈페이지주소 입력시 홈페이지 출력하기에 고객은 사용못하게 true/false]
 * @param {*} imageExt 에디터 이미지 파일첨부 확장자 배열
 * @param {*} sizeControlNumber 에디터 파일첨부시 용량제한
 * @param {*} style 에디터의 style object
 * @returns 에디터 컴포넌트 배포
 */
const EditorQuill = ({ editorData, setEditorData, videoUse, imageExt, sizeControlNumber, style }) => {
    const quillRef = useRef();
    let imageInputAccept = '',
        imageExtTxt = "",
        videoUseValue = "";
    if (videoUse) {
        videoUseValue = 'video';
    }
    imageExt.forEach(obj => {
        if (imageInputAccept) {
            imageInputAccept += ",";
            imageExtTxt += ", ";
        }
        imageInputAccept += `image/${obj}`;
        imageExtTxt += obj;
    })

    // 이미지 업로드 핸들
    const handleImage = () => {
        const editor = quillRef.current.getEditor();
        const input = document.createElement("input");
        input.type = "file";
        input.accept = imageInputAccept;
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            if (file) {
                // 이미지 확장자 체크 //
                let extChk = false;
                const ext = file.name.toLocaleLowerCase().substring(file.name.lastIndexOf('.') + 1);

                imageExt.forEach(el => {
                    if (el == ext) {
                        extChk = true;
                    }
                })
                if (!extChk) {
                    alert(`${imageExtTxt}의 확장자가 아닙니다.`);
                    input.value = ''
                    return;
                }
                // 이미지 확장자 체크 //

                // 이미지 사이즈 체크 //
                const maxSize = sizeControlNumber * 1024 * 1024 // 최대 업로드 크기
                const fileSize = file.size; // 파일 크기

                if (fileSize > maxSize) {
                    alert(`첨부파일 최대용량은 ${sizeControlNumber}MB 입니다.`);
                    input.value = "";
                    return;
                }
                // 이미지 사이즈 체크 //
            }
            const formData = new FormData();
            formData.append('file', file);
            try {
                const link = "http://localhost:3001/api/uploads/";
                const result = await axios.post(link, formData);
                const imgUrl = result.data.url;
                editor.insertEmbed(editor.getSelection(), "image", imgUrl);
            } catch (err) {
                console.log("upload err:", err);
            }
        }
    }

    const modules = useMemo(() => {
        return {
            toolbar: {
                container: [
                    // [{ 'font': [] }],
                    [{ 'header': [1, 2, false] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                    ['link', 'image', videoUseValue,],
                    [{ 'align': [] }, { 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                    ['clean']
                ],
                handlers: {
                    image: handleImage,
                }

            },
            ImageResize: {
                parchment: Quill.import('parchment')
            },
        }
    }, [])


    const formats = [
        // 'font',
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', videoUseValue,
        'align', 'color', 'background',
    ]

    return (
        <>
            <ReactQuill
                theme="snow"
                modules={modules}
                formats={formats}
                style={{ ...style }}
                ref={quillRef}
                value={editorData}
                onChange={(content, delta, source, editor) => setEditorData(editor.getHTML())}
            />
        </>
    )
}

export default EditorQuill