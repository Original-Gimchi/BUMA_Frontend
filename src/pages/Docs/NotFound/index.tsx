import * as C from 'allFiles'
import * as S from './style'

import React from 'react'
import { Helmet } from 'react-helmet'

const NotFound = () => {
	return (
		<>
			<Helmet>
				<meta property="og:title" content={`부마위키 - 404 NOT FOUND`} />
				<title>부마위키 - 404 NOT FOUND</title>
			</Helmet>
			<C.Header />
			<S.NotFoundWrap>
				<C.Board>
					<S.NotFound>404 Not Found</S.NotFound>
				</C.Board>
				<C.Aside />
			</S.NotFoundWrap>
			<C.Footer />
		</>
	)
}

export default NotFound
