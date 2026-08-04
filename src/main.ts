import { Tags, Article } from "./classes/Article.js"

const testArticle = new Article(
  "test",
  [Tags.DESIGN],
  "https://www.google.com/search?client=opera-gx&hs=19e&sca_esv=9ebf811b5d8bc7ad&sxsrf=APpeQnsuioWqWIIY5Q8ZENgCWSI5RgdfJA:1785056513207&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832SMIiTl3t-JZ4hGJOxPbHYSIu8Q64jU5EwQ-803VaKbdipNP9IdSJPNW0dZW-vtpfTgsxPubDUGnnlexyWPgXsYNlXlmyPinvUYfER67uhQ5Vfbik35T4Dg9gniUKXVW_UbnTVWpRess5NuzktlkeG__xvaIML5bSATkoDeT0MVLmDH1TQ&q=Colemak+Mod-DH&sa=X&ved=2ahUKEwizqf7a_e-VAxXwH0QIHTyWCXgQtKgLegQIFxAB&biw=1437&bih=734&dpr=2.63#sv=CAMSUxoyKhBlLWMzaTRrUk4wS012eFZNMg5jM2k0a1JOMEtNdnhWTToOTkZ3bURjczZrQzFJUk0gBCoXCgFzEhBlLWMzaTRrUk4wS012eFZNGAEwATgAGAcg8YbItwE6AEoIEAEYASABKAE",
  "test",
  "test"
);
testArticle.init();
document.body.append(testArticle.page);
