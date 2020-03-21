export const Request = {
    get: async (
        url,
        headers = {
            'Content-Type': 'application/json','Accept':'*/*'
        },
        options = null
    ) => {
        try {
            const jsonRes = await (await fetch(
                url,
                {
                    method: "GET",
                    headers: headers,
                    ...options
                }
            )).json()
            return jsonRes
        }
        catch (error) {
            console.log("Fetch error")
            console.log(JSON.stringify(error))
            throw error
        }
    },
    post: async (
        url,
        data,
        headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        options = null
    ) => {
        try {
            const jsonRes = await (await fetch(
                url,
                {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify(data),
                    ...options
                }
            )).json()
            // console.log(jsonRes)
            return jsonRes
        }
        catch (error) {
            console.log("Fetch error")
            console.log(JSON.stringify(error))
            throw error
        }
    },
    put: async (
        url,
        data,
        headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        options = null
    ) => {
        try {
            const jsonRes = await (await fetch(
                url,
                {
                    method: "PUT",
                    headers: headers,
                    body: JSON.stringify(data),
                    ...options
                }
            )).json()
            return jsonRes
        }
        catch (error) {
            console.log("Fetch error")
            console.log(JSON.stringify(error))
            throw error
        }
    }
}