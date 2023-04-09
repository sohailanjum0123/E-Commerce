class apiFeatures{
    constructor(query,querystr){
        this.query = query,
        this.querystr = querystr
    }

    search(){
        const keyword = this.querystr.keyword ? {
            name:{
                $regex:this.querystr.keyword,
                $options:'i'
            }
        }:{};
        this.query = this.query.find({...keyword});
        return this;
    }

    filter(){
        const queryCopy = {...this.querystr};

        const removeFields = ["keyword","page","limit"];
        removeFields.forEach(key=> delete queryCopy[key]);

        //filter for Price and Rating
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    pagination(resultPerPage){
        const currentPage = Number(this.queryStr.page) || 1;

        const skip =resultPerPage *  (currentPage - 1);
    }
}
module.exports = apiFeatures;