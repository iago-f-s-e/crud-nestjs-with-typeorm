import { MigrationInterface, QueryRunner } from 'typeorm';

export class SetupDatabase1638557731989 implements MigrationInterface {
  name = 'SetupDatabase1638557731989';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "answer" ("answer_id" uuid NOT NULL, "question_id" uuid NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT \'now()\', "updated_at" TIMESTAMP NOT NULL DEFAULT \'now()\', CONSTRAINT "PK_26e548d2b73776a764f14c2d107" PRIMARY KEY ("answer_id"))'
    );
    await queryRunner.query(
      'CREATE TABLE "category" ("category_id" uuid NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_cc7f32b7ab33c70b9e715afae84" PRIMARY KEY ("category_id"))'
    );
    await queryRunner.query(
      'CREATE TABLE "question" ("question_id" uuid NOT NULL, "category_id" uuid NOT NULL, "user_id" uuid NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "is_open" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT \'now()\', "updated_at" TIMESTAMP NOT NULL DEFAULT \'now()\', CONSTRAINT "PK_7c755ccdc03ae2b6206ff00363a" PRIMARY KEY ("question_id"))'
    );
    await queryRunner.query(
      'CREATE TABLE "user" ("user_id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT \'now()\', CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" PRIMARY KEY ("user_id"))'
    );
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_e12875dfb3b1d92d7d7c5377e2" ON "user" ("email") '
    );
    await queryRunner.query(
      'CREATE INDEX "IDX_fde2ce12ab12b02ae583dd76c7" ON "user" ("isActive") '
    );
    await queryRunner.query(
      'CREATE TABLE "admin" ("admin_id" uuid NOT NULL, "user_id" uuid NOT NULL, CONSTRAINT "REL_a28028ba709cd7e5053a86857b" UNIQUE ("user_id"), CONSTRAINT "PK_08603203f2c50664bda27b1ff89" PRIMARY KEY ("admin_id"))'
    );
    await queryRunner.query(
      'ALTER TABLE "answer" ADD CONSTRAINT "FK_c3d19a89541e4f0813f2fe09194" FOREIGN KEY ("question_id") REFERENCES "question"("question_id") ON DELETE CASCADE ON UPDATE CASCADE'
    );
    await queryRunner.query(
      'ALTER TABLE "question" ADD CONSTRAINT "FK_5fd605f755be75e9ea3ee3fdc18" FOREIGN KEY ("category_id") REFERENCES "category"("category_id") ON DELETE CASCADE ON UPDATE CASCADE'
    );
    await queryRunner.query(
      'ALTER TABLE "question" ADD CONSTRAINT "FK_82c53e1db067ff3d6ef17dfd5c4" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE CASCADE'
    );
    await queryRunner.query(
      'ALTER TABLE "admin" ADD CONSTRAINT "FK_a28028ba709cd7e5053a86857b4" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE CASCADE'
    );
    await queryRunner.query(
      'CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "query-result-cache"');
    await queryRunner.query('ALTER TABLE "admin" DROP CONSTRAINT "FK_a28028ba709cd7e5053a86857b4"');
    await queryRunner.query(
      'ALTER TABLE "question" DROP CONSTRAINT "FK_82c53e1db067ff3d6ef17dfd5c4"'
    );
    await queryRunner.query(
      'ALTER TABLE "question" DROP CONSTRAINT "FK_5fd605f755be75e9ea3ee3fdc18"'
    );
    await queryRunner.query(
      'ALTER TABLE "answer" DROP CONSTRAINT "FK_c3d19a89541e4f0813f2fe09194"'
    );
    await queryRunner.query('DROP TABLE "admin"');
    await queryRunner.query('DROP INDEX "public"."IDX_fde2ce12ab12b02ae583dd76c7"');
    await queryRunner.query('DROP INDEX "public"."IDX_e12875dfb3b1d92d7d7c5377e2"');
    await queryRunner.query('DROP TABLE "user"');
    await queryRunner.query('DROP TABLE "question"');
    await queryRunner.query('DROP TABLE "category"');
    await queryRunner.query('DROP TABLE "answer"');
  }
}
