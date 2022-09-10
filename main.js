// ===========================================
// == Variables And Concatenation Challenge ==
// ===========================================

// [1] Create 3 Variables [Title, Desctiption, Date]
// -- All In One Statement
// -- Variable Name Must Be Two Words
// -- Title Content Is "Elzero"
// -- Description Content Is "Elzero Web School"
// -- Date Content Is "25/10"
// [2] Create Variable Contains Div And This Div Contains
// -- H3 For Title
// -- P For Paragraph
// -- Span For Time
// [3] Add This Card To Page 4 Times
// [4] Use Template Literals For Concatenate

// Extra
// - Use ES6 Repeat

// Solution:
//declaration:
let title, desc, date;
//initialization
let name = "Kira Yoshikage";

title = "Elzero";
desc = "Elzero Web School";
date = "25/10";

const markup = `
    <div>
        <h3>${title}</h3>
        <p>${desc}</p>
        <span>${date}</span>
    </div>
`;

let result = markup.repeat(4);
document.write(result);
