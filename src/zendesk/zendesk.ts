
async function fetchData() {
        const error = String;
        const url = 'https://gillztest.zendesk.com/api/v2/tickets/recent.json'
        const res = await fetch(url, {
            method: 'get',
            headers: ({
                'Authorization': 'Basic cy5rb3BAZ2lsbHoubmwvdG9rZW46WUdLdGtoVktPNE5IV0JOVUZJSjVmVXBEU2dRMVhnY3JiVlJ6eTlOYw==',
            }),
        });
        res
            .json()
            .then((res) => {
                return res;
            })
            .catch(err => error(err));
    }