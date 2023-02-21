import * as C from 'allFiles'
import * as R from 'react-router-dom'
import * as api from 'api/getDocs'
import * as FC from 'utils'
import * as S from './style'

import React from 'react'
import { useQuery } from 'react-query'
import Docs from 'types/docs'

const Search = () => {
	const router = R.useParams()
	const navigate = R.useNavigate()
	const [result, setResult] = React.useState([])
	const [isLoad, setIsLoad] = React.useState(false)

	useQuery('findDocs', () => api.findDocs(router.title as string), {
		onSuccess: (data) => {
			if (data.length === 1) navigate(`/docs/${data[0].title}`)
			setResult(data)
			setIsLoad(true)
		},
		onError: (err) => {
			alert('검색 도중 오류가 발생했습니다.')
			console.log(err)
		},
	})

	return (
		<>
			<C.Header />
			<S.SearchWrap>
				<C.Board>
					<S.SearchTitleWrap>
						<span>&quot;{router.result}&quot; 검색결과</span>
					</S.SearchTitleWrap>
					<S.Classify>
						<C.Classify>검색</C.Classify>
					</S.Classify>
					<S.SearchLine />
					<S.SearchResult>
						<S.SearchList>
							{isLoad ? (
								<>
									{result.map((result: Docs, index) => (
										<S.SearchListItem key={index}>
											<S.SearchLink to={`/docs/${result.title}`}>
												{result.title} — ( {FC.typeEditor(result.docsType)},{result.enroll} )
											</S.SearchLink>
										</S.SearchListItem>
									))}
								</>
							) : (
								<div>
									<span>아직 &quot;{router.result}&quot; 문서는 없습니다.</span>
									<br />
									<br />
									<R.Link to={`/create?name=${router.result}`} style={{ textDecoration: 'none', color: 'blue' }}>
										지금 문서를 생성해보세요
									</R.Link>
								</div>
							)}
						</S.SearchList>
					</S.SearchResult>
					<C.SubFooter />
				</C.Board>
				<C.ScrollBtn />
				<C.Aside />
			</S.SearchWrap>
			<C.Footer />
		</>
	)
}

export default Search
