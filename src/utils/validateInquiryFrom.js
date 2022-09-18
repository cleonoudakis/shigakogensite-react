export const validateInquiryForm = (values) => {
    const errors = {};
    if (!values.inqName) errors.inqName = "Required";
    else if (values.inqName.length < 2) errors.inqName = "Must be at least 2 characters.";
    else if (values.inqName.length > 15) errors.inqName = "Must be 15 characters or less.";

    if (!values.inqEmail) errors.inqEmail = "Required";
    else if (!values.inqEmail.includes('@')) errors.inqEmail = "Email should contain a @";

    if (!values.inqTitle) errors.inqTitle = "Required";
    if (!values.inqContent) errors.inqContent = "Required";

    const reg = /^\d+$/;
    if (!reg.test(values.inqSNS) && values.inqSNS) errors.inqSNS = "The phone number should contain only numbers.";
    
    return errors;
}