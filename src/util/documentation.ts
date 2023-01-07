export const documentation = (content: string) => {
    const ORIGINAL_CONTENT = content
        .replace(/<항목>/gi, `?^li style="list-style: disc;"^?`)
        .replace(/<어록>/gi, `?^div style="width:100%; background-color:#ccc; height:50px; border: 1px solid black; font-weight:800; display:flex; align-items:center;"^??^span style="margin-left:20px;"^?`)
        .replace(/<\/어록>/gi, `?^@#@#@span^??^@#@#@div^?`)
        .replace(/<강조>/gi, `?^strong^?`)
        .replace(/<\/강조>/gi, `?^@#@#@strong^?`)
        .replace(/<빨강>/gi, `?^span style="color:red;"^?`)
        .replace(/<\/빨강>/gi, `?^@#@#@span^?`)
        .replace(/<하양>/gi, `?^span style="color:white;"^?`)
        .replace(/<\/하양>/gi, `?^@#@#@span^?`)
        .replace(/<취소선>/gi, `?^del style="color:#ccc;"^?`)
        .replace(/<\/취소선>/gi, `?^@#@#@del^?`)
        .replace(/<<사진>>:{.*}/gi, `?^ ?^ 문서 생성 시 삽입하신 이미지가 차례대로 표시됩니다 ^? ^?`)
        .replace(/<<사진>>/gi, `?^ ?^ 문서 생성 시 삽입하신 이미지가 차례대로 표시됩니다 ^? ^?`)
        .replace(/<링크 문서={/gi, `?^a style="text-decoration:none; color:blue;" href='/search/`)
        .replace(/}>/gi, `'^?`)
        .replace(/<\/링크>/gi, `?^@#@#@a^?`)
        .replace(/<br\/>/gi, `?^br@#@#@^?`)
        .replace(/<</gi, `?^img src='`)
        .replace(/>>:{/gi, `' alt='' style="width:`)
        .replace(/}/gi, `%;" @#@#@^?`)
        .replace(/<.*>/gi, ``)
        .replace(/&lt;.*&gt;/gi, ``)
        .replace(/onerror/gi, `해킹시도하지마세요 ㅎㅎ`)
    const HTML_CONTENT = ORIGINAL_CONTENT
        .replace(/\?\^/gi, `<`)
        .replace(/\^\?/gi, `>`)
        .replace(/@#@#@/gi, `/`)
        .replace(/&$^%/, `"`);
    return HTML_CONTENT;
}