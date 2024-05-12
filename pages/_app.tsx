import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";

export default function App({ Component }: AppProps) {

  const client = new ApolloClient({
    uri:"http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache() // 컴퓨터에 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해 놓기
  })

  return (
    <div>
      <div>===========여기는 _app.js 컴포넌트 시작 입니다.============</div>
      <ApolloProvider client={client}>
        <Component/>
      </ApolloProvider>
      <div>===========여기는 _app.js 컴포넌트 마지막 입니다.============</div>
    </div>
  );
}