﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using my_new_app.Context;

namespace my_new_app.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20190729201558_rarity")]
    partial class rarity
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity("my_new_app.Context.Card", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CardText");

                    b.Property<string>("Color");

                    b.Property<int>("Cost");

                    b.Property<string>("Effects");

                    b.Property<string>("Name");

                    b.Property<int>("Rarity");

                    b.Property<string>("Type");

                    b.Property<bool>("Upgraded");

                    b.HasKey("Id");

                    b.ToTable("Card");
                });

            modelBuilder.Entity("my_new_app.Context.Enemy", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Attacks");

                    b.Property<int>("HP");

                    b.Property<int>("RewardClass");

                    b.HasKey("Id");

                    b.ToTable("Enemy");
                });

            modelBuilder.Entity("my_new_app.Context.Event", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<int>("RewardClass");

                    b.HasKey("Id");

                    b.ToTable("Event");
                });

            modelBuilder.Entity("my_new_app.Context.Relic", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Effects");

                    b.Property<string>("Name");

                    b.Property<int>("Value");

                    b.HasKey("Id");

                    b.ToTable("Relic");
                });
#pragma warning restore 612, 618
        }
    }
}
