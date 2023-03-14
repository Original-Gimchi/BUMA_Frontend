const documentation = (content: string) => {
	// const frameColor = localStorage.getItem('frameColor')
	// const textColor = localStorage.getItem('textColor')
	// const fc = frameColor
	// const tc = frameColor
	// localStorage.removeItem('frameColor')
	// localStorage.removeItem('textColor')
	const ORIGINAL_CONTENT = content
		// 틀 생성
		.replace(
			/<틀>/gi,
			`?^table style="border-collapse:collapse;border:solid 3px #274168; margin: auto; text-align:center; padding:10px; width:80%"^?`
		)
		.replace(/<\/틀>/gi, `?^@#@#@table^?`)
		.replace(/<행>/gi, `?^tr^?`)
		.replace(/<\/행>/gi, `?^@#@#@tr^?`)
		.replace(/<열/gi, `?^td style="height:30px; border:solid 3px #274168"`)
		.replace(/<\/열>/gi, `?^@#@#@td^?`)
		.replace(
			/<틀제목>/gi,
			`?^caption style="background-color: #274168; color: white; font-weight:700; padding:6px; font-size:20px"^?`
		)
		.replace(/<\/틀제목>/gi, `?^@#@#@caption^?`)
		.replace(/가로병합={{/gi, ` colSpan="`)
		.replace(/세로병합={{/gi, ` rowSpan="`)
		.replace(/}}/gi, `"`)


		// 태그 지원
		.replace(/<include title={/gi, ``)
		.replace(/<항목>/gi, `?^li style="list-style: disc;"^?`)
		.replace(
			/<어록>/gi,
			`?^div style="width:100%; background-color:#ccc; height:50px; border: 1px solid black; font-weight:800; display:flex; align-items:center;"^??^span style="margin-left:20px;"^?`
		)
		.replace(/<\/어록>/gi, `?^@#@#@span^??^@#@#@div^?`)
		.replace(/<강조>/gi, `?^strong^?`)
		.replace(/<\/강조>/gi, `?^@#@#@strong^?`)
		.replace(/<빨강>/gi, `?^span style="color:red;"^?`)
		.replace(/<\/빨강>/gi, `?^@#@#@span^?`)
		.replace(/<하양>/gi, `?^span style="color:white;"^?`)
		.replace(/<\/하양>/gi, `?^@#@#@span^?`)
		.replace(/<노랑>/gi, `?^span style="color:#ffd400;"^?`)
		.replace(/<\/노랑>/gi, `?^@#@#@span^?`)
		.replace(/<취소선>/gi, `?^del style="color:#ccc;"^?`)
		.replace(/<\/취소선>/gi, `?^@#@#@del^?`)
		.replace(/<소제목>/gi, `?^div style="color:#274168; margin-top:20px; font-size:28px; font-weight:700; font-family:Open Sans, sans-serif;"^?`)
		.replace(/<\/소제목>/gi, `?^@#@#@div^??^hr@#@#@^?`)
		.replace(/<<사진>>:{.*}/gi, `?^ ?^ 문서 생성 시 삽입하신 이미지가 차례대로 표시됩니다 ^? ^?`)
		.replace(/<<사진>>/gi, `?^ ?^ 문서 생성 시 삽입하신 이미지가 차례대로 표시됩니다 ^? ^?`)
		.replace(/<외부링크 문서={/gi, `?^a style="text-decoration:none; color:blue;" target="_blank" href="`)
		.replace(/<링크 문서={/gi, `?^a style="text-decoration:none; color:blue;" target="_blank" href="/docs/`)
		.replace(/<링크 아이디={/gi, `?^a style="text-decoration:none; color:blue;" target="_blank" href="/docs/`)
		.replace(/}>/gi, `"^?`)
		.replace(/<\/외부링크>/gi, `?^@#@#@a^?`)
		.replace(/<\/링크>/gi, `?^@#@#@a^?`)
		.replace(/<br\/>/gi, `?^br@#@#@^?`)
		.replace(/<</gi, `?^img src="`)
		.replace(/>>:{/gi, `" alt='' style="width:`)
		.replace(/}/gi, `%;" @#@#@^?`)


		// 문서 보안
		.replace(/<.*>/gi, ``)
		.replace(/&lt;.*&gt;/gi, ``)
		.replace(/onerror/gi, ``)
		.replace(/onafterprint/gi, ``)
		.replace(/onbeforeprint/gi, ``)
		.replace(/onbeforeunload/gi, ``)
		.replace(/onhashchange/gi, ``)
		.replace(/onload/gi, ``)
		.replace(/onmessage/gi, ``)
		.replace(/onoffline/gi, ``)
		.replace(/ononline/gi, ``)
		.replace(/onpagehide/gi, ``)
		.replace(/onpageshow/gi, ``)
		.replace(/onpopstate/gi, ``)
		.replace(/onresize/gi, ``)
		.replace(/onstorage/gi, ``)
		.replace(/onunload/gi, ``)
		.replace(/onblur/gi, ``)
		.replace(/onchange/gi, ``)
		.replace(/oncontextmenu/gi, ``)
		.replace(/oninput/gi, ``)
		.replace(/onfocus/gi, ``)
		.replace(/oninvalid/gi, ``)
		.replace(/onreset/gi, ``)
		.replace(/onsearch/gi, ``)
		.replace(/onselect/gi, ``)
		.replace(/onsubmit/gi, ``)
		.replace(/onkeydown/gi, ``)
		.replace(/onkeypress/gi, ``)
		.replace(/onkeyup/gi, ``)
		.replace(/alert/gi, ``)
		.replace(/iframe/gi, ``)
		.replace(/embed/gi, ``)
		.replace(/&#.*;/gi, ``)


	const HTML_CONTENT = ORIGINAL_CONTENT.replace(/\?\^/gi, `<`)
		.replace(/\^\?/gi, `>`)
		.replace(/@#@#@/gi, `/`)
		.replace(/&\$\^%/gi, `"`)
	return HTML_CONTENT
}

export default documentation
