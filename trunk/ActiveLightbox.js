var __jlb_current_content = '';
$(function() {
    // in google reader
    if(/^http(?:s?):\/\/www\.google\.com\/reader/i.test(location.href))
    {
        $('#entries').click(__jlb_init_gr).scroll(__jlb_init_gr);
    }
    else
    {
        __jlb_init('');
    }

});

function __jlb_init_gr()
{
    var tCurrentContent = $('#current-entry').html();
    if(__jlb_current_content != tCurrentContent)
    {
        __jlb_current_content = tCurrentContent;
        __jlb_init('#current-entry ');
    }
}

function __jlb_init(obj)
{
    $(obj + 'a[href$=jpg]')
    .add(obj + 'a[href$=jpeg]')
    .add(obj + 'a[href$=jpe]')
    .add(obj + 'a[href$=jfjf]')
    .add(obj + 'a[href$=gif]')
    .add(obj + 'a[href$=png]')
    .add(obj + 'a[href$=bmp]')
    .add(obj + 'a[href$=dib]')
    .add(obj + 'a[href$=JPG]')
    .add(obj + 'a[href$=JPEG]')
    .add(obj + 'a[href$=JPE]')
    .add(obj + 'a[href$=JFJF]')
    .add(obj + 'a[href$=GIF]')
    .add(obj + 'a[href$=PNG]')
    .add(obj + 'a[href$=BMP]')
    .add(obj + 'a[href$=DIB]')
    .lightBox({
        overlayOpacity: 0.6,
        imageBlank: "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        imageLoading: "data:image/gif;base64,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",
        imageBtnClose: "data:image/gif;base64,R0lGODlhQgAWANUAAP////39/fr6+vj4+PX19fDw8Ovr6+np6ebm5uTk5N/f39zc3Nra2tfX19XV1dLS0svLy8jIyL6+vre3t7S0tLKysq+vr6ioqKOjo56enpubm5aWlpGRkY+Pj4yMjIeHh4KCgoCAgH19fXZ2dnNzc3FxcW5ubmlpaWdnZ2RkZGJiYl9fX11dXVpaWlVVVVNTU1BQUE5OTktLS0lJSUZGRgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAHAP8ALAAAAABCABYAAAb/QIBwSCwaj8ikcslsOp/QqLQZmFqvRAHngYxsBEaCw3EYHhwE5IFykZSLZ7RQPK4PBxzaimGEtGgcaXMZL4UvH0IXLw5HEoaFF0MEIo8RAA6PhUMWNC8xKw1EES0xLzQYQ5QfY2yJi0YRh2UKlBRCHC8XDhEZZZgcdYxCBiQzLzIqC0KjpTMhBUIULxlHisJEKCiCAAQoLEIvJEaYkUcGIzKeKAt+pTQgA0Pe20TWRQrTRYSMLyjjuUnOGYOBgtQxENsOHEJij4g0S6IA4gpEBJOICxjfEDmXDgaMYx/iDSHH8FU9kyMBTnrBguKlTNeIFCjx0ZMGMBUBVkPpKubL2XKXKLFQ8HNJgRM1Y3Qwgo9DSZ+ObBFxJKGIIxFFkywwUcrjMQ1ViLDwt9OnQkREcGkcQuJF1iMLUKSLkWLFRxlgTwK91NMIJaJC8GE14u1tkQUr0skgkSCCV7xhubUF5gCXJUUcMGJkpIAFCwkOKHgGnCHDmA/5LGoGyiCxCxkjDAiZ8DjvHEqFWFADoChTOQcoDKEADAC1od2YMglhwEIxCdlDKsjwSKMCnDFQFJAxEqdJgQ4yZjw3UiGGjBN8sKjP4mH8EQsnEKyfP0QAvSIB5NPfz7+/+iAAOw==",
        imageBtnPrev: "data:image/gif;base64,R0lGODlhPwAgAOYAAP////39/fv7+/n5+fj4+Pb29vT09PLy8vDw8O7u7urq6unp6efn5+Xl5ePj4+Hh4d/f393d3dvb29ra2tjY2NbW1tTU1NDQ0M7OzszMzMvLy8nJycfHx8XFxcPDw8HBwb+/v729vby8vLq6uri4uLa2trKysq6urq2traurq6mpqaenp6Ojo6GhoZ+fn56enpycnJqampiYmJSUlJCQkI+Pj42NjYWFhYODg4GBgYCAgHx8fHp6enh4eHZ2dnR0dHJycnFxcW9vb21tbWtra2lpaWVlZWNjY2JiYmBgYF5eXlxcXFpaWlhYWFZWVlRUVFNTU1FRUU9PT01NTUtLS0lJSUdHR0JCQkBAQP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEHAFkALAAAAAA/ACAAAAf/gACCg4SFhoeIiYqGWVmLj5CRj46SlZaXmJmam5ydnp+goaKjpKWmp6ipmwMYICAfFQSCE64hGQuCBx4fvLwMGhwBgwMbG6IFOVFJyzsQAC1QSkpIRikAEUtOS0xMShc1URKDE0o2xzpCBQclVDYCLUsSAxFBTRQOUjQQFPwBH1MuBqmoguEcEAEAAjDxYYCFkgaCVkT5wGDKikIIiAwpAKCAjyDCQhXQEQRBgRJWbARgsUTEhBBHkkBw8ARHiBEkPCCM8UQDAAtVRIwqgCOKkiVJekwAwAKKkSVPgHQAIGGJkiJGjuAYAGDCFBkAZCRhMDSHEQ8dKMh6tkQDCiojnQRJiDLDAYQIDkLuEALhyAyE534YcpFEgQAfSA5QnWLNEIcpN5IUHKoDCFdCLpQ4ACCCyotrUWhUGG0hgaAEQ6rwCHmMB5HLg2A8cWagR5UND55YucIbiwlBAWBcOVEqwIIGrAUpkLBWQYUFAyRMmD4dwaADFDiq2n6JwIABAsIL+E4gOfdEAgKoX7/+vPv38OPLn0+//iVK9hU1CgQAOw==",
        imageBtnNext: "data:image/gif;base64,R0lGODlhPwAgAOYAAP////39/fv7+/n5+ff39/X19fPz8/Hx8e/v7+3t7evr6+np6efn5+bm5uTk5OLi4uDg4N7e3tzc3NjY2NbW1tLS0tDQ0M7OzsrKysjIyMbGxsLCwsDAwLy8vLq6ura2trS0tLOzs7Gxsa+vr62traurq6mpqaenp6WlpaOjo52dnZubm5mZmZGRkY+Pj42NjYuLi4eHh4WFhYODg4GBgYCAgH5+fnp6enh4eHZ2dnR0dHBwcG5ubmxsbGpqamhoaGZmZmRkZGJiYmBgYF5eXlxcXFpaWlhYWFZWVlRUVFJSUlBQUE5OTk1NTUtLS0lJSUdHR0VFRUNDQ////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEHAFMALAAAAAA/ACAAAAf/gFNTAISFhoeIiYqLjIiDjZCRkpOUlZaXmJmam5ydnp+goaKjpKWmp6igARomF4UCHCIABiAlJrcnDxQoroQKJRsOKSYlIyUnIASeAS5PQxGEAzZFAAxCSUFCQkUXDD1GEADMTRgWSEJGSkNDOAfLLUlMMsoDNUQAC0UzCQz9yhhNYATIwGRFgAENFqh4UmHBggDLXPx4wQQEAAE07i0w8iIRCyUhdvBAYKgElAWhmPlogOOIAwAZ8Q3hUQJFChIFCBG4scRIhUMmoDRIKZHAhCTzYi4IYkSHyBruxM14UiScoaBDVUk8ECBFkxIxhuArIgNBAgUKIAIQoeSEkBtRiQlhJfqDZIEeRYIAwWekBaIIR2oA+PDkxFWhdEkCMLfkBz4iOTpI9vBgAA0kEgAMuJFkQqG5qlrsiJtCSQ98QJpAWS3lhAgnhglRODJabpSsoAgQUCtOt7gDCMwmSFDgQFpDBxYIIFRAwfJU0CkFEBCgunXr0TXxzs69u/fv4MOLdzRekqDykAIBADs=",
        imageFail: "data:image/gif;base64,R0lGODlhLAHIAMQAAAAAAOLi4nFxcSoqKqmpqUZGRsbGxn9%2Ffw0NDZmZmWJiYjg4ONTU1I2Njbe3txsbG1RUVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAHAP8ALAAAAAAsAcgAAAX%2FYCCOZGmeaKqubOu%2BcCzPdG3feK7vfO%2F%2FwKBwSCwaj8ikcslsOp%2FQqHRKrVqv2Kx2y%2B16v%2BCweEwum8%2FotHrNbrvf8Lh8Tq%2Fb7%2Fi8fs%2Fv%2B%2F%2BAgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYawA3myYAnSedoCyjKaWZVZ%2BnQ6swp62eL7Ajs6hRtT%2B4K68uuiK4vrZMoKqbqiTFyMm%2Fx7HMn8rQtMvT0tSi1aPFq8TCWt2%2FtKHh4gHazufoyM7q5uTk6SXg3lfz8%2Bvu5fH6%2BPLv%2Bf385cPGr5wpeljsGdz2TxRDgfEe7mu4jOA2gv%2FGIbSiEB6%2BdLUwDvwY8B1Ij%2BwA%2F6IItvFIx5EFzYnkpXKmSZo1UZ5kplFlSyjNXj6UaSxbT2pEpRH1WbPiTaVLuZX8qYZlGqtUsyC9gzWr169gw4odS7as2bNo06pdy7at27dw48qdS7eu3bt48%2Brdy7ev37%2BAAwseTLiw4cOIEytezLix48eQI0ueTLmy5cuYM2vezLmz58%2BgQwszQIi0YgICICxYDUEAgRUCAAyAcOC1kAYCjKBWzdo1bNm0bQcmAAHBRVUPBDBAEXvbgwY%2BCDwA8GB5EOLGj1NXzvzic78OFiBXkIAAgQYQij0QTkL8RfY4GBT4lDtI%2BPHlz6dHDl%2BE%2B2392cWAAsglcIID2X0CXf8J%2FxVjXQ4JGDeAA0EMWOCBCQKwYHvHPYiXAQOoUh8KDRSDAIUcOrdDcxB42AOIIqpQoionMujdXgwkuGEKGS5g4zYF6LCfAiU4AMF01BXQgIsv5KjKjij0%2BGMxQer134gqNAgAiv5dhGUN%2B2HJwH4XIcBdDFe2oCWXAWgJwJd1EUCjhwYE2JwqB0RTjIE37AcBCQ4MgIACthnQAJIAIBBgCnJ%2BggCddm6TZzaq8InXnT6OQCB1bAZw5ydVPlOMaWB%2BkqkICBbApKfFQKkCpiRs%2BkCnnwIQalKqkHrXnQOM8OkDJdR6Kq6J3jDjoyMw8MCfjCZIZAu8%2BqpesNsMW%2Bb%2FXjN%2BYhtuIWpLwnzFWFutDQ5USgIEva5Q7pMtZAvAtgJ0%2B%2B6341IKwLB3GRBuCZuyhyioetJXg5P3kqAvlwyYx%2BQBxSxq8L6xejvCv7YG%2FCZfDWKZHgKAepnsRa6%2BAO6WsYYaIXJfIorsChmfW%2BwI6xYzIgMg89UouwEgCIClAWxaDJc3q9LpCwmowuwIC0y6KXT7DfCgu%2FieELSGqBrHs89CjzA1yXzVCoECCCCwI8HIkbA1DWTDN6%2B%2BAByN5K0ZhkxtMV%2BHPXaG1Jl90V8H4A2BrgG4%2B8mkIkwdtQtkpovMa41a6jOXZCa6agl9b%2FN3CYIDQHgAhgPGAG4CJLAq%2F8UrF77NszHETLU8fE5HQtGDw3x6C58LEPro25TO%2BeyL1Xqx3sVs%2FkKDTC7wrJHA%2Fy4CxYDP4PuXUwtvGNmfAFvC1A4zCjHl1ptwM3tYt30D9XlfD%2BBiI6vS39STZxn8CTnyrOknR6N6UfMwpC9x8p%2B0HxjsMjuBuziWum0MTQQR6pTO6jcx3s0AgDEywQAVQ77DsUoVFlRB5GbRALFpzTioK8EGCSiDCnYHg4rRX3VOSL8YUC%2BDhXsAAhYQovWkIHNyW4EKJ%2FcpBhJGcDViofJcILgQpiABtjsgCWgGJBkAUYkXFNhhDIA3KEZxZzHQn%2FRuQLoYUNGAr9oTYuSloP%2FfqC8G7%2BnBBuf1AjKuLgWfyl5fwpdDaanCf967iBWdd5EtooCOLPgUHvcCwTeGsRkv8F10PNaCQtbRjlARzBdxFkgaoWlvL7oIDEcwyTJCy5KEYQAZH0kCWMEAbyTkgSZZIMpWJRKFhIkcKUsJSxcwcXs8oNgmAyBLGJhSMO6aJS0B9oKt7XIGWtpkMGNwp1v9RWee9GUEXWDMH2jJmUXSkQzuBCe%2BKAtPfJSiC3x3TBmEr5si%2BGbstjnNv4zMh%2BNsZyXr1YNa%2BTEA76QBNwOTLXjGM5qfpCcParWoftbgTsKUyySddtAzouBzc8PlioZSgoUOEo4OhV9CzeIeBOD%2F75X7Mw9uCjAdxYmAnD%2F4lElT5FEb3Ek4IhUASWVDl2wVQI4oIAAS3agd8ZEgcyvVwaeMKAKb4lRqO%2B2p5eZCvk8MYDUKsJ1UbaeA1fBUqQHkHyJ5kD75BaCpsoHqVKVaVRpitafoXIvvzsrWs8KHbRTdAfFMsNa22vU4RzWLLlfD1776NapjFcB%2FWhNYqTIJb11hQYKwGYC9%2BvWxYg3sYAtrWMi89JLn4wFcDQmEy2rGsy9gWGZ3AMGL3gC0mEFtC1QnTh34jLE%2BUK1lspVXElDMnzWQl1d%2FQNvNfM%2Bc2wiqDW7ZvSH8VjPHhQFrE4sCAN6zB8nFTHTbOFoc7Ed3%2F0KY7mUyCoMi7gBJac3F%2FjLD3SZlqLg2aBR2WTFezGSnthH9xB4R19oivJcz7oHvEv%2BFW%2FNKLgn5xW97YQDB9TIToEYI8Gb6ZYP0hZeVxilnDxi8mebotwRkM3A8W6oEC3OmOc9dLd1owLaNDnSdmhHtg9vVsBmEqL9DUDFnGrViFlfPtPNjKBNoPONPEJUG2ZJw4GSD4x806seVaZSQV3Ayn7KgRA%2F46BGUrBkHJOC6fm1x6ro1ACkXlchOsDKW%2B6plxBgAiQW4ak%2FRtikzTY5AqkrCmWWqZu0UJmEHUE1PZ7gAwobOPIAmV0cFoKtDISDEOsCznrXDZz%2FnJ9CCcZ4AxTAYVQLMVwdGys4DVrOdItNA0toxnmsuXZhiDEABDfByEc5juwOQWgemRrWqGzMb0QWi1p4Wja53zete%2B%2FrXwA62sIdN7GIb%2B9jITrayl83sZjv72dCOtrSnTe1qW%2Fva2M62trfN7W57%2B9vgDre4x03ucpv73OhOt7rXze52u%2Fvd8I63vOdN73rb%2B974zre%2B983vfvv73wAPeGRCAAA7",
        containerResizeSpeed: 350
        });
}