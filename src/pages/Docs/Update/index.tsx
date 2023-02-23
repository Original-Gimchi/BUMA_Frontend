import * as C from 'allFiles'
import * as R from 'react-router-dom'
import * as FC from 'utils'
import * as S from './style'
import * as getApi from 'api/getDocs'
import * as editApi from 'api/editDocs'

import userState from 'context/userState'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { MutationFunction, useMutation, useQuery } from 'react-query'
import axios from 'axios'
import FileListArray from 'types/filelistArray'

const Update = () => {
	const router = R.useParams()
	const user = useRecoilValue(userState)
	const navigate = R.useNavigate()
	const textareaRef = React.useRef<HTMLTextAreaElement>(null)

	const [title, setTitle] = React.useState('')
	const [contents, setContents] = React.useState('')
	const [files, setFiles] = React.useState<FileListArray[]>([])
	const [fileInput, setFileInput] = React.useState([''])
	const [isOnAutoComplete, setIsOnAutoComplete] = React.useState(JSON.parse(localStorage.getItem('autoComplete') || 'true'))

	const { mutate } = useMutation(editApi.updateDocs as MutationFunction, {
		onSuccess: () => {
			alert('문서가 편집되었습니다!')
			navigate(`/docs/${router.title}`)
		},
		onError: (err) => {
			console.log(err)
			if (err instanceof axios.AxiosError && err.response !== undefined) {
				if (err.response.status === 403) {
					if (err.response.data.message === 'Cannot Change Your Docs') alert('자기자신의 문서는 변경할 수 없습니다.')
					if (err.response.data.error === 'Forbidden') alert('읽기전용 유저입니다.')
					else alert('로그인 후 사용 가능한 서비스입니다.')
				} else {
					alert(`오류가 발생했습니다. 개별적으로 관리자에게 문의바랍니다. 오류코드 : ${err.response.status}`)
				}
			}
		},
	})

	const onClickAutoComplete = () => {
		localStorage.setItem('autoComplete', `${!isOnAutoComplete}`)
		setIsOnAutoComplete(!isOnAutoComplete)
		if (textareaRef.current !== null) textareaRef.current.focus()
	}

	const uploadFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) setFiles([...files, e.target.files[0]])
	}

	const onClickUpdateDocs = async () => {
		if (!user.isLogin) {
			alert('로그인 후 이용 가능한 서비스입니다.')
			return
		}

		if (!contents.length) {
			alert('문서가 비어있습니다!')
			return
		}

		const FormData = require('form-data')
		const data = new FormData()
		data.append(
			'request',
			new Blob([`{ "contents": "${contents.replace(/\n/gi, '<br>').replace(/"/gi, '&$^%').replace(/\\/gi, '/')}" }`], {
				type: 'application/json',
			}),
			{ contentType: 'application/json' }
		)
		for (let i = files.length - 1; i >= 0; i--) {
			data.append('files', files[i], files[i].name)
		}

		mutate({ data, title: router.title })
	}

	useQuery('docs', () => getApi.getDocs(router.title as string), {
		onSuccess: (data) => {
			setContents(data.contents)
			setTitle(data.title)
		},
		onError: (err) => {
			alert('오류가 발생하여 문서를 불러올 수 없습니다.')
			console.log(err)
		},
	})

	return (
		<>
			<C.Header />
			<S.DocsWrap>
				<C.Board>
					<S.DocsTitleWrap>
						<S.DocsTitleText>문서 편집 : {title}</S.DocsTitleText>
					</S.DocsTitleWrap>
					<S.DocsExampleImage src="/images/docs-example.png" alt="문서작성법" />
					<S.DocsLine />
					<S.DocsContentsWrap>
						{fileInput.map((index) => (
							<input key={index} type="file" accept="image/*" onChange={(e) => uploadFiles(e)} />
						))}
						<S.FileAddWrap onClick={() => setFileInput([...fileInput, ''])}>
							<S.FileAddButton>+</S.FileAddButton>
							<S.FileAddText>사진 더 선택하기</S.FileAddText>
						</S.FileAddWrap>
						<S.DocsNeedFileText>문서에 필요한 사진태그 개수 : {files.length}개</S.DocsNeedFileText>
						<S.AutoCompleteToggleWrap onClick={onClickAutoComplete}>
							<S.AutoCompleteToggleText>자동완성</S.AutoCompleteToggleText>
							<S.AutoCompleteToggleButton color={isOnAutoComplete ? '#274168' : 'white'}>
								<svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M4.36016 5.38789L9.26016 0.48789C9.44349 0.304557 9.67682 0.212891 9.96016 0.212891C10.2435 0.212891 10.4768 0.304557 10.6602 0.48789C10.8435 0.671224 10.9352 0.904557 10.9352 1.18789C10.9352 1.47122 10.8435 1.70456 10.6602 1.88789L5.06016 7.48789C4.86016 7.68789 4.62682 7.78789 4.36016 7.78789C4.09349 7.78789 3.86016 7.68789 3.66016 7.48789L1.06016 4.88789C0.876823 4.70456 0.785156 4.47122 0.785156 4.18789C0.785156 3.90456 0.876823 3.67122 1.06016 3.48789C1.24349 3.30456 1.47682 3.21289 1.76016 3.21289C2.04349 3.21289 2.27682 3.30456 2.46016 3.48789L4.36016 5.38789Z"
										fill="white"
									/>
								</svg>
							</S.AutoCompleteToggleButton>
						</S.AutoCompleteToggleWrap>
						<S.UpdateTextarea
							ref={textareaRef}
							onKeyDown={(e) => FC.onKeyDownUseTab(e)}
							onChange={(e) => setContents(isOnAutoComplete ? FC.autoClosingTag(e) : e.target.value)}
							value={contents
								.replace(/\?\^table.*/gi, '[[프로필]]')
								.replace(/<br>/gi, '\n')
								.replace(/&$^%/gi, '"')}
						/>
						<S.UpdatePreviewText>미리보기</S.UpdatePreviewText>
						<S.UpdatePreview
							dangerouslySetInnerHTML={{
								__html: FC.documentation(contents.replace(/<br>/gi, '\n')),
							}}
						/>
						<S.UpdateButton onClick={onClickUpdateDocs}>문서 업데이트</S.UpdateButton>
					</S.DocsContentsWrap>
					<C.SubFooter />
				</C.Board>
				<C.ScrollBtn />
				<C.Aside />
			</S.DocsWrap>
			<C.Footer />
		</>
	)
}

export default Update
