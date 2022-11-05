import type { FC } from "react";
import * as NextHead from "next/head";

export const Head: FC<{title?: string}> = ({ title }) => {
  
  return (
    <NextHead.default>
      <title>{title || 'NPM post'}</title>
      <link rel="icon" href="/favicon.ico" />
    </NextHead.default>
  )
}