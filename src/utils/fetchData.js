export const fetchData = async (url) => {
    let data = null;
    try {
        const result = await fetch(url);
        if (result.ok) {
            data = await result.json();
        }
    } catch (error) {
        console.log('error: ', error);
    }
    return data;
}