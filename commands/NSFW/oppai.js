// Copyright (c) 2020 Azura Apple. All rights reserved. MIT license.

const Command = require('../../base/Command.js');
const { RichEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');
const errors = require('../../assets/json/errors');

class Oppai extends Command {
    constructor(client) {
        super(client, {
            name: 'oppai',
            description: 'Finds oppai for you!\nThis command can only be used in NSFW channels!',
            category: 'NSFW',
            usage: 'c.oppai',
            guildOnly: true,
            aliases: ['tiddy', 'animetiddy']
        });
    }

    async run(message, args, level, settings) {
        let errMessage = errors[Math.round(Math.random() * (errors.length - 1))];
        if (!message.channel.nsfw) {
            message.react('💢');
            return message.channel.send(errMessage);
        }

        randomPuppy('OppaiLove')
        .then(url => {
            const embed = new RichEmbed()
                .setFooter(`oppai`)
                .setDescription(`[Image URL](${url})`)   
                .setImage(url)
                .setColor('RANDOM');
            return message.channel.send({ embed });
        })
    }
}

module.exports = Oppai;