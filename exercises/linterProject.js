let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
// Mảng chứa các từ bị lạm dụng
let overusedWords = ['really', 'very', 'basically'];

// Mảng chứa các từ không cần thiết cần lược bỏ
let unnecessaryWords = ['extremely', 'literally', 'actually'];

var storyWords=story.split(" ");
console.log(`Tổng số từ có trong story:${storyWords.length}`);

var betterWords=storyWords.filter(item=>!unnecessaryWords.includes(item));

// for(let i = 0;i<storyWords.length;i++){
//     for(let j =0 ;j<unnecessaryWords.length;j++)
//     {
//       if(storyWords[i]===unnecessaryWords[j]) storyWords.splice(i,1);
//     }
//   }

 console.log(`Đoạn văn sau khi đã lượt bỏ những từ không cần thiết.\n ${storyWords.join(" ")}`);
 console.log("Số lượng từ bị lạm dụng được sử dụng trong đoạn văn");
 for(let i = 0;i<overusedWords.length;i++){
    var count =0;
    for(let j =0 ;j<storyWords.length;j++)
    {
      if(storyWords[j]===overusedWords[i])
        count++;
    }
    console.log( count + ' ' + overusedWords[i] + ' are used');
  }
// for(let i=0;i<overusedWords.length;i++){
//     let count=betterWords.filter(item=>item===overusedWords[i]);
//     console.log(`${overusedWords[i]}:${count.length}`)
// }
 var  countSentences=betterWords.filter(item=>item[item.length-1]==="." || item[item.length-1]==="!");
 console.log(`Số câu có trong đoạn văn là:${countSentences.length}`);