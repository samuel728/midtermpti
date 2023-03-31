var sumberGambar = ["https://file.notion.so/f/s/c24984a5-390e-4250-9c01-f20c21c336f6/baby_patrick.png?id=23b8b751-5e46-4b52-af68-8eaa661e64e6&table=block&spaceId=a87e2f9d-141a-403a-ab4f-5c8145dcc9fa&expirationTimestamp=1680374648451&signature=Pv3jlh-snGYSlIS5YNmZC2quXi7p1N4lWGo3UWWD2OE&downloadName=baby_patrick.png", "https://file.notion.so/f/s/d00852d1-7c92-48b9-a2db-8ca51c4f26c6/baby_spongebob.png?id=2f8cb459-ada0-450b-a3fa-e7036a2d8968&table=block&spaceId=a87e2f9d-141a-403a-ab4f-5c8145dcc9fa&expirationTimestamp=1680374672248&signature=E-WZB4fzueHxv7tNgHu2WzRSnfm_sxg51pe_lhMYLzg&downloadName=baby_spongebob.png", "https://file.notion.so/f/s/039598f1-3eee-475b-806c-385cb7cd93b1/baby_squidward.png?id=a84f561c-34b2-44fd-9031-154575ab65b7&table=block&spaceId=a87e2f9d-141a-403a-ab4f-5c8145dcc9fa&expirationTimestamp=1680374699420&signature=EckXunBVCfjyGPRysKdJRMc5C-8pZR0Boj0UdjeZhso&downloadName=baby_squidward.png"];
var indeksGambar = 0;
var elemenGambar = document.getElementById("character");

function gantiGambar(jumlah) {
indeksGambar = (indeksGambar + jumlah + sumberGambar.length) % sumberGambar.length;
elemenGambar.src = sumberGambar[indeksGambar];}



