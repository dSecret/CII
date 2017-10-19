const apollo = require("apollo-client");
const gql = require("graphql-tag");

export default () => {

	const client = new apollo.ApolloClient({
    	networkInterface: apollo.createNetworkInterface({
        	uri: "http://localhost:4000/query",
    	}),
	});

	return {
		query (gql_tag) {
			return client.query({
				query: gql_tag
			})
		}
	}
}


// client.query({
//     query: gql("{ hello }"),
// })
//     .catch(function(err){
//         console.error(err);
//     })
//     .then(function(data){
//         console.log(data);
//     })
// ;