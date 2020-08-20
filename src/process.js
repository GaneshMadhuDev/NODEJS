
    console.log(process.argv);

    // In Command line
    // ls
    // cd src
    // run node process.js => gives
    //[ '/usr/local/bin/node',
    //       '/Users/ganeshmadhu/Desktop/NodeJs/src/process.js' ]

    console.log(process.pid);

    // 83732 --> gives pid

    console.log(process.versions.node);

    // gives => 10.16.3 --> version of node


    const [, , firstName, lastName] = process.argv;

    console.log(`My Name is  ${firstName} ${lastName}`);

    // node process Ganesh Madhu
    // => gives  My Name is  Ganesh Madhu

    const fetch = flag =>  {

        let index = process.argv.indexOf(flag) + 1;

        return process.argv[index];
    };

    const greetingWord = fetch("--greeting");
    const name = fetch("--name");

    console.log(`${greetingWord} ${name}`);

    // node process --greeting Hi --name Ganesh
    // => Gives Hi Ganesh
