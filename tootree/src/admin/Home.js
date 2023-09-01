
    setTimeout(() => {
        getcategory()
        .then(res => {
            setIsLoaded(false);
            console.log("res from api", res)
            setCategories(res.data)
            
        })
        .catch(function (error) {
            console.log(error);
        });
    }, index * 1000);