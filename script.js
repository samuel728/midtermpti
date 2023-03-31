var sumberGambar = ["https://file.notion.so/f/s/39e49a80-ddbd-4687-a4ef-b145a3c73fe3/baby_patrick.png?id=2e551086-0686-4919-a660-c75e68c547a5&table=block&spaceId=a87e2f9d-141a-403a-ab4f-5c8145dcc9fa&expirationTimestamp=1680388757964&signature=mvi6raLN0VCB5OyMeQFyJi2Y6DbuTL3h12WowOUwNSs&downloadName=baby_patrick.png", "https://file.notion.so/f/s/d00852d1-7c92-48b9-a2db-8ca51c4f26c6/baby_spongebob.png?id=2f8cb459-ada0-450b-a3fa-e7036a2d8968&table=block&spaceId=a87e2f9d-141a-403a-ab4f-5c8145dcc9fa&expirationTimestamp=1680374672248&signature=E-WZB4fzueHxv7tNgHu2WzRSnfm_sxg51pe_lhMYLzg&downloadName=baby_spongebob.png", "https://file.notion.so/f/s/039598f1-3eee-475b-806c-385cb7cd93b1/baby_squidward.png?id=a84f561c-34b2-44fd-9031-154575ab65b7&table=block&spaceId=a87e2f9d-141a-403a-ab4f-5c8145dcc9fa&expirationTimestamp=1680374699420&signature=EckXunBVCfjyGPRysKdJRMc5C-8pZR0Boj0UdjeZhso&downloadName=baby_squidward.png"];
var indeksGambar = 0;
var elemenGambar = document.getElementById("character");

function gantiGambar(jumlah) {
indeksGambar = (indeksGambar + jumlah + sumberGambar.length) % sumberGambar.length;
elemenGambar.src = sumberGambar[indeksGambar];}



