"""empty message

Revision ID: 425803e3d9cd
Revises: 0f846b00d0db
Create Date: 2020-10-21 17:12:57.595639

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '425803e3d9cd'
down_revision = '0f846b00d0db'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('timeline_node', 'attachment',
               existing_type=sa.VARCHAR(length=32),
               type_=sa.String(length=512),
               existing_nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('timeline_node', 'attachment',
               existing_type=sa.String(length=512),
               type_=sa.VARCHAR(length=32),
               existing_nullable=True)
    # ### end Alembic commands ###
