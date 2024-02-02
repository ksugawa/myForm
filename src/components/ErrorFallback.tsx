import React from 'react';
import { FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({ error }: FallbackProps) => {
    return (
        <>
            <h2>エラーが発生しました。</h2>
            <pre>{error.message}</pre>

        </>
    )
}

export default ErrorFallback