document.addEventListener('DOMContentLoaded', () => {
    // Array of Bible verses
    const verses = [
        "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. - John 3:16",
        "The Lord is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters. He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake. Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me. - Psalm 23:1-4",
        "Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up, Doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil; Rejoiceth not in iniquity, but rejoiceth in the truth; Beareth all things, believeth all things, hopeth all things, endureth all things.-1Corinthians13:4-7",
        "I can do all things through Christ which strengtheneth me.-philippians4:13",
        "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.-Romans 8:2",
        "Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.-Proverbs3:5-6",
        "For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end.- Jeremiah29:11",
        "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.-Isaiah 40:31",
        "God is our refuge and strength, a very present help in trouble. Psalm46:1",
        "And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me. -2Corinthians12:9",
        "Come unto me, all ye that labour and are heavy laden, and I will give you rest.-Mattthew11:28",
    ];

    // Extract the 'name' query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name') || 'Guest';

    // Select a random verse
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];

    // Display the name and the verse
    const verseDisplay = document.getElementById('verseDisplay');
    verseDisplay.innerText = `Blessings ${name}, ${randomVerse}`;
});
