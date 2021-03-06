import { HttpModule, Module } from '@nestjs/common';
import { FileService } from './services/file.service';
import { IdService } from './services/id.service';
import { UtilityService } from './services/utility.service';
import { JsonSchemaService } from './services/json-schema.service';
import { JsonLdService } from './services/json-ld.service';
import { ValidatorService } from './services/validator.service';
import { StoreConfigModule } from '@luomus/store/config';

@Module({
  imports: [StoreConfigModule, HttpModule],
  providers: [IdService, FileService, UtilityService, JsonSchemaService, JsonLdService, ValidatorService],
  exports: [IdService, FileService, UtilityService, JsonSchemaService, JsonLdService, ValidatorService]
})
export class StoreSharedModule {}
