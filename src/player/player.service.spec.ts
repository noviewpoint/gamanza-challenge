import { Test, TestingModule } from '@nestjs/testing';
import { PlayerService } from './player.service';
import { PrismaService } from '../prisma.service';

describe('PlayerService', () => {
  let service: PlayerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlayerService,
        {
          provide: PrismaService,
          useValue: {
            player: {
              findUnique: jest.fn().mockResolvedValue(null),
              findMany: jest.fn().mockResolvedValue([]),
            },
          },
        },
      ],
    }).compile();

    service = module.get<PlayerService>(PlayerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it(`Return empty list of players`, async () => {
    const output = await service.findAll({
      skip: 1,
      limit: 1,
    });
    expect(output).toBeTruthy();
  });

  it(`Return non existing player`, async () => {
    const output = await service.findOne(1);
    expect(output).toBeFalsy();
  });
});
